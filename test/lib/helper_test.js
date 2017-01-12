const helper = require('../../lib/helper');

describe('/lib/helper', function () {
    const acc = 'test';
    const domain = 'domain.com';
    const email = `${acc}@${domain}`;

    describe('.getHost', function () {

        it('Should return a String', function () {
            const result = helper.getHost(email);

            result.should.be.a.String();
        });

        it('Should return the host', function () {
            const result = helper.getHost(email);

            result.should.be.a.String();
            result.should.equal(domain);
        })


    });

    describe('.groupRecipients', function () {

    });

    describe('.getAddress', function () {
        const input = `Test Domain <${email}>`;

        it('Should return a String', function () {
            const result = helper.getAddress(input);

            result.should.be.a.String();
        });

        it('Should only return the email', function () {
            const result = helper.getAddress(input);

            result.should.be.a.String();
            result.should.equal(email);
        });

        it('Should return the provided email if only the email is provided', function () {
            const result = helper.getAddress(email);

            result.should.be.a.String();
            result.should.equal(email);
        });

        it('Should return the substring within "<" and ">"', function () {
            const result = helper.getAddress(`${email} <${acc}>`);

            result.should.be.a.String();
            result.should.equal(acc);
        });

        it('Should remove excess whitespace before and after the address', function () {
            const result = helper.getAddress(`   ${email}   `);

            result.should.be.a.String();
            result.should.equal(email);
        });

    });

    describe('.getAddresses', function () {
        const addresses = `${email}, info@domain.com, user@domain.com`;

        it('Should return a list', function () {
            const result = helper.getAddresses(addresses);

            result.should.be.an.Array();
        });

        it('The first element should be equal to the test email', function () {
            const result = helper.getAddresses(addresses);

            result[0].should.equal(email);
        });
    });

});
