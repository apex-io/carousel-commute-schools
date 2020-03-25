# carousel-commute-schools

Instructions to populate Database

    1. run the schema.sql file  in seeder folder to create the fake_data database
    "mysql -u 'user' -p < schema.sql"

    2. make sure that the seeder.js file in seeder folder "line 10" is correct to connect to your database (2nd argument is username, 3rd argument is password (null if no password))

    3. make sure that the dbQueries.js file in db folder "line 3" is correct to connect to your database (2nd argument is username, 3rd argument is password (null if no password))

    3. run the seeder.js file in seeder folder to populate the database
    "node seeder.js"
