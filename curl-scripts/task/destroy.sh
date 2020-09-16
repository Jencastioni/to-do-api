curl "http://localhost:4741/tasks/${ID}" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}" \

echo
