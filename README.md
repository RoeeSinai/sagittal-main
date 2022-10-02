# sagittal-main

code for the Sagittal notation system

## development

When cloning, use:

```shell
git clone --recurse-submodules git@github.com:Sagittal/sagittal-main.git
cd sagittal-main
git submodule foreach git checkout main
```

in order to get all the submodules set up properly.

You will need to install Node on your system, then clone down the repo and run `npm i`.

To see a list of available scripts, run `npm run`.

If you see a script you're interested in, learn its options with `npm run [script] -- --help`.

### Additional helpful setup

Run Jasmine tests written in TypeScript with Webstorm by adding the following to `Node options` 
in the Jasmine run configuration template: `-r ts-node/register/transpile-only`.

To set a new context for the run configuration, set a hotkey for `Run context configuration`.
To re-run the existing configuration, set a hotkey for `Run`.

Use the **DejaVu Sans Mono** font because it makes key characters such as "⟩" and subscript numbers actually monospace.
Then also set your fallback font to **Bravura**, so the unicode characters for Sagittal symbols such as "" will display. 
You may need to uncheck "Only show monospaced fonts" to get Bravura to appear in the list.

You may need to run `npm config set script-shell "C:\Program Files\Git\bin\sh.exe"`; otherwise, characters like '⟩' may not output properly.
