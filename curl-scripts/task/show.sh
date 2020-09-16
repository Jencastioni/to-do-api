curl "http://localhost:4741/tasks/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
