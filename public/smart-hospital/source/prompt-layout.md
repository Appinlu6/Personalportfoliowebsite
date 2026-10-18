$imagegen

Use the built-in image_gen tool (gpt-image-2). Do not use any other image method.

Image 1 is the EDIT TARGET: public/smart-hospital/source/layout.png

Task: remake this product-layout diagram for an English portfolio case study.

Use case: text-localization + ui-mockup
Asset type: case-study diagram for the Smart Hospital page

Keep unchanged:
- the real product screenshot: left stats column, center 3D hospital floor with salmon-colored blocks, right drill-down charts
- the three-column split and the sense of reading from coarse to fine

Change:
- remove all Chinese overlay text
- restyle surrounding chrome to this palette: background #f2f7fc, text #23384d, muted #5e7185, accent #4c7399, soft fill #dce8f3, line #cad9e7
- keep the product UI itself, but any large white overlay captions must become English
- English labels only, letter-perfect

Text (verbatim):
- Top title: "From overview to detail"
- Arrow label, left to right: "Coarse" then "Fine"
- Left overlay: "Overview stats"
- Center overlay: "Core 3D view"
- Right overlay: "Drill-down"

Constraints:
- no Chinese characters
- do not invent extra UI chrome or fake numbers on top of the screenshot
- keep the original interface recognizable
- no logos or watermarks
- landscape, about 16:9

After generating, copy the selected image to:
public/smart-hospital/layout-en.png
Then print that path and stop.
