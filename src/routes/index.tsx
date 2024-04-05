import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SelectInput } from "~/components/select-input/select-input";

export default component$(() => {
  return (
    <div style="display:block; overflow:hidden">
      <aside style="height:100vh; width: 268px; position: absolute; background-color: red;">
      </aside>
      <div style="background-color: yellow; float: left; position: absolute; display: block; white-space: normal; height: 100%; width: 100%; margin-left: 268px;">
          <SelectInput />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
