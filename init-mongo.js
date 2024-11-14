db.createUser({
    user: "root",
    pwd: "root",
    roles: [
      { role: "readWrite", db: "mydb" },
      { role: "dbAdmin", db: "mydb" }
    ]
  });