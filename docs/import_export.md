# Import/Export
Users may wish to share their scenes or even their entire library with others. FlipFlip makes it easy to 
export your resources and to import those you may receive or find!

## Scene Export
To export a Scene, open the Scene you want to export and click the `Export Scene` button ( 
<img style="vertical-align: -5px" src="doc_icons/export.svg" alt="Export" width="20" height="20"> ) in the sidebar. 
Save the file and share where you'd like.

This file is just a long line of text which holds the data about your Scene's configuration. You could also just 
post this text online for someone to import with (you don't have to share the file directly).

Any overlays will also be exported with this scene. However, those overlays' overlays will not be exported.

?> Any exported Generators will be imported as regular Scenes

?> **NOTE:** _Due to the nature of FlipFlip scenes, we don't recommend you try and import/export Scenes with local 
directories. This will technically work, but the import/exporter would have to have the same file paths (or will 
have to modify them manually)._

## Scene Import
To import as Scene, click the `+` and then `Import Scene`  ( <img style="vertical-align: -5px" src="doc_icons/import.svg" 
alt="Import" width="20" height="20"> ) on the Scene Picker (Home). You will be prompted to select a file to import from. 

If you have a `.json` export file, simply select it and your Scene will import. If you got a line of text from 
someone, paste it into a file and save it. Then pick that file during the import.

You can also choose to import this scene's sources into your library.

After confirmation, the imported Scene (and any overlays/grids) will be created and you will be brought to 
the imported Scene.

## Library Export
To export your Library, click the `Export Library` button ( <img style="vertical-align: -5px" src="doc_icons/export.svg" 
alt="Export" width="20" height="20"> ) from the Library sidebar. Simply save the json file and share it as 
you'd like, or keep it as a backup.

This file is just a long line of text which holds the data about your Library. 
You could also just post this text online for someone to import with (you don't have to share the file directly).

## Library Import
To import a Library, click the `Import Library` button ( <img style="vertical-align: -5px" src="doc_icons/import.svg" 
alt="Import" width="20" height="20"> ) from the Library sidebar. Select the library `.json` file you'd like to import. 

Sources you already have will not be duplicated. However, if the imported Library has tags for a source and you do 
not, the tags will be imported. The tags for any new items will be created and added. Any new blacklist urls or clips 
will be added to existing sources.

