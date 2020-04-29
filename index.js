exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('All working good !!! '),
        // TEST WITH OTHER YML FILE WORKIN'
        //lambda role test
    };
    return response;
};

