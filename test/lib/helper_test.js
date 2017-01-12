const helper = require('../../lib/helper');

describe('/lib/helper', function() {

    describe('.getHost', function() {
        const acc = 'test';
        const domain = 'domain.com';
        const email = `${acc}@${domain}`;

        it('Should return the host', function() {
            const result = helper.getHost(email);

            result.should.be.a.String();
            result.should.equal(domain);
        })
    });

    describe('.groupRecipients', function() {

    });

    describe('.getAddress', function() {

    });

    describe('.getAddresses', function() {

    });

});
