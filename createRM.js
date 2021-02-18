function createReadMe(responses) {

    return `

        ${responses.Title}

        ${responses.Description}

        ${responses.Installation}

        ${responses.Usage}

        ${responses.Contributors}

        ${responses.Testing}

        ${responses.Licensing}

        `

}

module.exports = createReadMe;