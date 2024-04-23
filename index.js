const core = require('@actions/core')
const github = require('@actions/github')

try {
    const outputFilename = core.getInput('pack-name')
    console.log(`Beginning build of ${outputFilename} resource pack`)
} catch (error) {
    core.setFailed(error.message)
}