# React 19 Release Candidate (RC)

Currently, we don't have a specific release date for the official launch of the highly anticipated React 19. However, while we wait, we can explore and enjoy the Release Candidate (RC) to discover its new features and test its powerful compiler.

In this guide, I'll show you how to install this new version.

## Preparing the Environment

First, create the folder where we'll be working:

```bash
npm create vite@latest react-beta-test
```

## Installing React RC

Once you have run the previous command, you need to install the new RC version of React.

### Using npm

```bash
npm install --save-exact react@rc react-dom@rc
```

### Using yarn

```bash
yarn add --exact react@rc react-dom@rc
```

## Using TypeScript?

If you're using TypeScript, you will also need to update the types:

```JSON
{
  "dependencies": {
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc"
  },
  "overrides": {
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc"
  }
}
```

## Now, you are ready to create awesome app
