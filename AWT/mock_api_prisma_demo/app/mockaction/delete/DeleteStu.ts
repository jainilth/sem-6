"use server"

// Delete user by id
async function deleteUser(id: number) {
  const res = await fetch(`https://your-api.com/api/users/${id}`, {
    method: "DELETE",
  });
}