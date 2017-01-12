function getHost(email) {
    const m = /[^@]+@([\w\d\-\.]+)/.exec(email);
    return m && m[1];
}

function groupRecipients(recipients) {
    let groups = {};
    let host;
    const recipients_length = recipients.length;
    for (let i = 0; i < recipients_length; i++) {
        host = getHost(recipients[i]);
        (groups[host] || (groups[host] = [])).push(recipients[i])
    }
    return groups
}

function getAddress(address) {
    return address.replace(/^.+</, '').replace(/>\s*$/, '').trim();
}

function getAddresses(addresses) {
    const results = [];
    if (!Array.isArray(addresses)) {
        addresses = addresses.split(',');
    }

    const addresses_length = addresses.length;
    for (let i = 0; i < addresses_length; i++) {
        results.push(getAddress(addresses[i]));
    }
    return results
}

module.exports = {
    getHost,
    groupRecipients,
    getAddress,
    getAddresses
}
