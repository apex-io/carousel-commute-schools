# carousel-commute-schools

Instructions to populate Database

    1. run the schema.sql file  in seeder folder to create the fake_data database
    "mysql -u 'user' -p < ./seeder/schema.sql"

    2. make sure that the seeder.js file in seeder folder "line 10" is correct to connect to your database

    - make sure that the username and password correspond with the line above. 
    - if you want to seed the database with example// user:root and pw: none, then change 'hello' to null. 

    3. run the seeder.js file in seeder folder to populate the database
    "node ./seeder/seeder.js"
