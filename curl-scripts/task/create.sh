#!/bin/bash
#TOKEN="890ac712d7a2ebfa57913158b6d360fc" CATEGORY="active" TITLE="complete assignment" TEXT="FINISH PROJECT 4" sh curl-scripts/task/create.sh
API="http://localhost:4741"
URL_PATH="/tasks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "task": {
      "category": "'"${CATEGORY}"'",
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'",
      "date": "'"${DATE}"'",
      "checkBox": "'"${CHECKBOX}"'"
    }
  }'

echo
