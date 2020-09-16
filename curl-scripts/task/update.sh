curl "http://localhost:4741/tasks/${ID}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "task": {
    "category": "'"${CATEGORY}"'",
    "title": "'"${TITLE}"'",
    "text": "'"${TEXT}"'"
  }
}'

echo
