curl "http://localhost:4741/tasks" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
