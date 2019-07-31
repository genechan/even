//////////////////////////////////////////////////////////////////////////
                    DB INFO
//////////////////////////////////////////////////////////////////////////

    Install mongoDB version 4.0.3
    Set it up under src/middleware/data/db if you don't want your personal MondoDB touched.

    create directory 
        mkdir src/middleware/data/db
    start mongod under src/middleware
        mongod --directoryperdb --dbpath data/db

    If you use home brew to install mongodb, to stop mongodb run
        brew services start mongodb

    if you need to check if mongodb is running, 0 is nothing running 1 or more means have.
        sudo lsof -iTCP -sTCP:LISTEN -n -P

    load mongoDB data
    under  src/middleware folder run
        mongoimport --db lucera --collection data --type csv  --file ../../adata.csv --headerline --stopOnError --mode upsert

    To add UUID to DB
    goto directory cd src/middleware
    run command 
        node startDbMutations.js 

    //FYI, it's a very long time to update each of your 850,000 entries with unique UUID,
    to save time I gave it same id, but I left the code there if you want unique UUIDs.

//////////////////////////////////////////////////////////////////////////
                    File Stream INFO  (read/write)
//////////////////////////////////////////////////////////////////////////

    For file read and write use the below command, this will make a data.js under src/middleware/data/
    Note!!! I'm using mongoDB and not reading this file, however this show use of read/write streams

    goto directory cd src/middleware
    run command 
        node startLoadData.js

//////////////////////////////////////////////////////////////////////////
                    Website info
//////////////////////////////////////////////////////////////////////////

        To start express.js server to start the website
        goto directory cd src/middleware
        run command

            node start.js
            or 
            node -r esm server.js

        -r esm param is to use ES6 imports

        open browser goto
        http://localhost:7777/

//////////////////////////////////////////////////////////////////////////
            Just info, nothing to do here
//////////////////////////////////////////////////////////////////////////

nodemon is not use due to this issue below
https://github.com/parcel-bundler/parcel/issues/800

example of fail run
in the src/middleware
npx nodemon -r esm server.js 