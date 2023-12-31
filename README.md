# Website

The source code of my website.

## Developer Notes

### Run installer script:

```powershell
.\scripts\install.ps1
```

### ~~Start local development server~~:

```powershell
yarn run start
```

### Start local development server (updated):

**Note**: Omitting the `configuration` option will launch the app with the defaullt `en-US` locale.

```powershell
ng serve --open --configuration=de
```

### Create translation files:

```powershell
npm run localize
```

### Build production files:

```powershell
npm run build
```
