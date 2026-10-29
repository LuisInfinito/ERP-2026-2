#!/usr/bin/env bash
# Crea las tarjetas (Issues de GitHub) a partir de un CSV con separador "|".
# Uso:
#   export GH_A=<usuario> GH_B=<usuario> GH_C=<usuario>
#   scripts/crear-tarjetas.sh                 # ensayo: muestra qué crearía
#   scripts/crear-tarjetas.sh --ejecutar      # crea las etiquetas y los Issues
#   scripts/crear-tarjetas.sh --ejecutar docs/plan/sprint-02.csv
# Requiere: GitHub CLI (`gh`) con sesión iniciada (`gh auth login`), dentro del repo.
set -euo pipefail

EJECUTAR=0
if [[ "${1:-}" == "--ejecutar" ]]; then EJECUTAR=1; shift; fi
CSV="${1:-docs/plan/sprint-01.csv}"
[[ -f "$CSV" ]] || { echo "No existe $CSV"; exit 1; }

usuario() { # A|B|C -> usuario de GitHub
  case "$1" in
    A) echo "${GH_A:-}";; B) echo "${GH_B:-}";; C) echo "${GH_C:-}";; *) echo "";;
  esac
}

if (( EJECUTAR )); then
  command -v gh >/dev/null || { echo "Falta GitHub CLI (gh)"; exit 1; }
  for et in aprendizaje codigo pruebas docs configuracion; do
    gh label create "$et" --force >/dev/null
  done
fi

while IFS='|' read -r id titulo etiqueta duenos horas prioridad dia depende criterio; do
  [[ -z "$id" || "$id" == \#* ]] && continue
  asignados=()
  IFS=',' read -ra letras <<< "$duenos"
  for l in "${letras[@]}"; do
    u="$(usuario "$l")"; [[ -n "$u" ]] && asignados+=("$u")
  done
  cuerpo="**ID:** $id
**Tipo:** $etiqueta
**Dueño(s) y horas:** $horas
**Prioridad:** $prioridad
**Día objetivo:** $dia

## Criterio de aceptación
$criterio

## Depende de
$depende"
  if (( EJECUTAR )); then
    args=(issue create --title "$id $titulo" --body "$cuerpo" --label "$etiqueta")
    for u in "${asignados[@]:-}"; do [[ -n "$u" ]] && args+=(--assignee "$u"); done
    gh "${args[@]}"
  else
    echo "[ensayo] $id | $titulo | etiqueta=$etiqueta | asignados=${asignados[*]:-(sin GH_A/GH_B/GH_C)} | $prioridad"
  fi
done < "$CSV"

(( EJECUTAR )) || echo "Ensayo terminado. Para crear de verdad: scripts/crear-tarjetas.sh --ejecutar"
