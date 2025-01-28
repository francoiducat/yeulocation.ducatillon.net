# Hugo Static Web Site Repository for Yeu location web site

## How to run locally?

### Serve (Development purposes)

- Duplicate `hugoserve.sample.sh` file
- Name it `hugoserve.sh` (Already added in `.gitignore` since you don't want to publish any APIKEY publicly)
- Open `hugoserve.sh`, set environment variables:
   - `export GMAPS_APIKEY="REPLACE_WITH_THE_APIKEY_VALUE"`
   - `export GMAPS_ID="REPLACE_WITH_THE_ID_VALUE"`
- Run `sh hugoserve.sh`

### Deploy (Deployment purposes)

- Duplicate `hugo.sample.sh` file
- Name it `hugo.sh` (Already added in `.gitignore` since you don't want to publish any APIKEY publicly)
- Open `hugo.sh`, set environment variables:
   - `export GMAPS_APIKEY="REPLACE_WITH_THE_APIKEY_VALUE"`
   - `export GMAPS_ID="REPLACE_WITH_THE_ID_VALUE"`
- Run `sh hugo.sh`

