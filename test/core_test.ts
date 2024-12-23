import {Pipeline} from "@core/pipeline.ts";

Deno.test("Piper initialization test", () => {
  const pipeline = new Pipeline("Test Pipeline");
  pipeline.execute();

  console.assert(true)
})