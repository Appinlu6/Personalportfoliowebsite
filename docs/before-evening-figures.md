# MetaHuman agents case study: figure briefs

Page: `src/app/case-studies/BeforeEveningVR.tsx` (`/work/before-evening-vr`).
Drop each finished file at the path listed. The page picks it up automatically; until then the slot shows a dashed placeholder in dev and nothing in production.

Figures 1, 2 and 5 are built as HTML in `docs/before-evening-figures/`. After editing a label, re-export with:

```sh
docs/before-evening-figures/render.sh \
  fig1-mcp-workflow:diagram-mcp-workflow:1200x540 \
  fig2-agent-anatomy:diagram-agent-anatomy:1200x880 \
  fig5-voice-pipeline:diagram-voice-pipeline:1200x490
```

## Shared style

- Background `#11100e`, panels `#1b1915`, text `#f3efe5`, secondary text `#b8b09f`, accent `#d2a934` (use the accent for the main path only).
- Flat line diagram, thin 1.5 px strokes, rounded rectangles, no 3D, no gradients, no glow, no icons that need explaining.
- Sans-serif labels in English, sentence case. No "Step 1/2/3" labels, no em dashes.
- Width 2400 px, export as `.webp`. Keep labels readable at 50% scale.
- Only use the facts below. Do not add numbers, tools, or features that are not listed.

## Figure 1 · MCP workflow (01 · The workflow)

- File: `public/before-evening/diagram-mcp-workflow.webp`
- Size: 2400 × 1350 (16:9)
- Shape: one loop, read left to right, returning to the start.

Nodes on the main path (accent):

1. `Me`
2. `PowerShell (Windows)`
3. `AI agent (via API)`
4. `UE5 MCP server`
5. `Unreal Editor`
6. `Test in Quest 3 headset`
7. `Keep or revert` (arrow back to `Me`)

Branch from `Unreal Editor`, four small boxes in secondary text:

- `Edit Blueprints`
- `Change input mappings`
- `Read logs`
- `Change plugin settings`

Optional side note near the loop, secondary text: `Used for: controller bindings, first-person comfort, Convai plugin, bug fixes`.

## Figure 2 · What a character is made of (02 · NPC agents, includes clue paths and memory)

- File: `public/before-evening/diagram-agent-anatomy.webp`
- Size: 2400 × 1760
- Shape: a gold line-art bust in the centre, anatomy-chart style. Each of the six parts has an icon and a leader line to a spot on the body: Knowledge and Memory to the two halves of the brain, Sight to the eye (dashed sight cone to a text tag), Actions to a rotation ring around the neck, Persona to a heart on the chest, Story tree to a small branching tree beside the head. Two small flows underneath; the clue flow starts from thumbnails of the four real clue props (`cue-*.webp`).

Six parts around the character:

- `Persona` with sub-label `Background and prompt, by Gong`
- `Story tree` with sub-label `Convai Narrative Design, one objective per section`
- `Knowledge` with sub-label `Knowledge bank`
- `Memory` with sub-label `Long-term memory`
- `Sight` with sub-label `Text tags on objects`
- `Actions` with sub-label `Nod, turn, look at`

Flow A, clues (bottom left), one clue splitting into two paths:

- `Clue` → `Mention it to a character` → `Story tree moves to the next section`
- `Clue` → `Hold it up` → `Character reads the tag` → `Reacts with an action`

Flow B, memory (bottom right):

- `Conversation` → `Convai long-term memory`
- `Player leaves the character` → `5 minutes` → `Timestamped local note (Obsidian-style)`
- Dashed, labelled `Planned`: `Device clock` → `Passing of time`

## Figure 5 · From voice to MetaHuman (03 · Interaction)

- File: `public/before-evening/diagram-voice-pipeline.webp`
- Size: 2400 × 980
- Shape: one horizontal chain, left to right. Each card has a gold line-art illustration on top (headset and A button, waveform to text, agent fed by prompt/memory/story, speaker, face mesh, speaking bust with gaze), with the title and sub-label below. Replaces the old 01–04 text list on the page.

Chain (accent):

1. `Hold A`
2. `Speech to text` (sub-label `Convai`)
3. `Agent answers` (sub-label `Prompt, memory, story so far`)
4. `Text-to-speech` (sub-label `Voice cloned from a team member`)
5. `Audio2Face` (sub-label `Facial blendshapes`)
6. `Lip-sync, gaze, gesture`

Annotations in secondary text:

- Under the Convai steps: `Engine version locked after an update broke the plugin`
- Under `Audio2Face`: `Long replies split into shorter segments to keep lip-sync`
- A bracket spanning the whole chain: `3–4 s from question to answer`

Do not show per-step timings; there is no data for them.

## Three exterior layers (Testing, round two)

Real screenshots from the process book (section 5.4), not a generated figure: `exterior-near.webp`, `exterior-mid.webp`, `exterior-far.webp`.

## Real screenshots (do not generate)

These slots prove the work happened, so they must be captures from the actual project.

| File | What to capture | Ratio |
|---|---|---|
| `convai-narrative-design.webp` | The story tree in Convai Narrative Design. A knowledge bank or memory settings page can be added beside it in the same image. | 16:10 |
| `memory-note.webp` | One saved conversation note, opened in Obsidian, with the timestamp visible. | about 7:6 |
| `mcp-session.webp` | PowerShell with the AI agent working through the UE5 MCP server. Blur API keys, user names, and local paths. | 16:10 |
| `mcp-blueprint.webp` | A Blueprint edited through MCP, for example the VRPawn input event graph, captured at full resolution. | 16:10 |
| `floor-plan.webp` | The school floor plan drawn from the reference photos. | 4:3 |

## Frames 6a and 6b · Same character, two prompts (03 · Interaction, real screenshots)

- Files: `public/before-evening/emotion-tired.webp`, `public/before-evening/emotion-nervous.webp`
- Size: 16:9 each, at least 1600 px wide, same character and camera framing in both.
- 6a: the character under `"You are tired and resigned"`, softer delivery, small gestures.
- 6b: the character under `"You are nervous and have something to hide"`, faster delivery, shifting gaze.
- Captions are already on the page; leave subtitles in the frame if they help.
