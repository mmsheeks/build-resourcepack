# Build Resourcepack Action

This action takes the contents of your project and builds them for use on a Minecraft server

## Inputs

### `pack-name`

The name you would like to use for the resulting ZIP file

## Outputs

### `release-path`

The URL to the release page created by this action

## Example Usage

```yaml
uses: mmsheeks/build-resourcepack@production
with:
    pack-name: 'myAwesomePack.zip'
```