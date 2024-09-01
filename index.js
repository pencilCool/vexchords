/*
 * Vex Chords v2
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 */

import ChordBox from "./chordbox.js";
import { POSITIONS, SHAPES, build } from "./builder.js";

function draw(sel, chord, opts) {
  return new ChordBox(sel, opts).draw(chord);
}

export { POSITIONS, SHAPES, ChordBox, build, draw };
