#!/bin/bash
# Hook: Aktualisiert ARCHITECTURE.md bei Code-Änderungen
# Trigger: PostToolUse (Edit|Write)
#
# Zwei Modi:
# 1. Simples Logging (immer) - kostenlos
# 2. Signifikante Änderung erkannt → Output für Haiku-Hook

# JSON Input von stdin lesen
INPUT=$(cat)

# Dateipfad extrahieren
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Falls kein Dateipfad, abbrechen
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Nur Source-Dateien tracken (keine Docs, Config, etc.)
if [[ "$FILE_PATH" =~ \.(md|json|yml|yaml|lock|log)$ ]]; then
  exit 0
fi

# Nur Dateien im src/ Verzeichnis tracken
if [[ ! "$FILE_PATH" =~ /src/ ]]; then
  exit 0
fi

# Projekt-Root ermitteln
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
ARCHITECTURE_FILE="$PROJECT_DIR/ARCHITECTURE.md"

# Falls ARCHITECTURE.md nicht existiert, abbrechen
if [ ! -f "$ARCHITECTURE_FILE" ]; then
  exit 0
fi

# Timestamp und relative Dateipfad
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
RELATIVE_PATH=$(echo "$FILE_PATH" | sed "s|$PROJECT_DIR/||")
FILENAME=$(basename "$FILE_PATH")

# Tool-Typ ermitteln (Edit oder Write)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // "Modified"')

# Aktion bestimmen
case "$TOOL_NAME" in
  "Write")
    ACTION="Erstellt"
    ;;
  "Edit")
    ACTION="Bearbeitet"
    ;;
  *)
    ACTION="Geändert"
    ;;
esac

# ============================================================
# SIGNIFIKANTE ÄNDERUNG ERKENNEN
# ============================================================
SIGNIFICANT=false
CHANGE_TYPE=""

# Neue Komponente erstellt
if [[ "$TOOL_NAME" == "Write" && "$FILE_PATH" =~ /components/.*\.tsx$ ]]; then
  SIGNIFICANT=true
  CHANGE_TYPE="NEUE_KOMPONENTE"
fi

# Neue Seite/Route erstellt
if [[ "$TOOL_NAME" == "Write" && "$FILE_PATH" =~ /app/.*page\.tsx$ ]]; then
  SIGNIFICANT=true
  CHANGE_TYPE="NEUE_ROUTE"
fi

# Neue Layout-Datei
if [[ "$TOOL_NAME" == "Write" && "$FILE_PATH" =~ /app/.*layout\.tsx$ ]]; then
  SIGNIFICANT=true
  CHANGE_TYPE="NEUES_LAYOUT"
fi

# Daten-Datei geändert (products, regions, etc.)
if [[ "$FILE_PATH" =~ /data/.*\.ts$ ]]; then
  SIGNIFICANT=true
  CHANGE_TYPE="DATEN_GEAENDERT"
fi

# Context geändert
if [[ "$FILE_PATH" =~ /context/.*\.tsx$ ]]; then
  SIGNIFICANT=true
  CHANGE_TYPE="CONTEXT_GEAENDERT"
fi

# ============================================================
# LOGGING (immer - kostenlos)
# ============================================================

# Prüfen ob der Eintrag schon existiert (vermeidet Duplikate)
if grep -q "$RELATIVE_PATH" "$ARCHITECTURE_FILE" 2>/dev/null; then
  sed -i "/\] .*: $RELATIVE_PATH$/d" "$ARCHITECTURE_FILE"
fi

# Neuen Eintrag erstellen
if [ "$SIGNIFICANT" = true ]; then
  NEW_ENTRY="[$TIMESTAMP] ⚡ $ACTION: $RELATIVE_PATH ($CHANGE_TYPE)"
else
  NEW_ENTRY="[$TIMESTAMP] $ACTION: $RELATIVE_PATH"
fi

# Füge den neuen Eintrag vor dem letzten ``` ein
if grep -q "^## Änderungsprotokoll" "$ARCHITECTURE_FILE"; then
  LAST_BACKTICK_LINE=$(grep -n '```$' "$ARCHITECTURE_FILE" | tail -1 | cut -d: -f1)
  if [ -n "$LAST_BACKTICK_LINE" ]; then
    sed -i "${LAST_BACKTICK_LINE}i\\$NEW_ENTRY" "$ARCHITECTURE_FILE"
  fi
fi

# ============================================================
# OUTPUT FÜR HAIKU-HOOK (nur bei signifikanten Änderungen)
# ============================================================
if [ "$SIGNIFICANT" = true ]; then
  # JSON Output für den nachfolgenden Haiku-Hook
  cat << EOF
{
  "significant_change": true,
  "change_type": "$CHANGE_TYPE",
  "file_path": "$RELATIVE_PATH",
  "action": "$ACTION",
  "architecture_file": "$ARCHITECTURE_FILE"
}
EOF
fi

exit 0
