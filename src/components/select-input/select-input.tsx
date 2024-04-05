import { component$ } from '@builder.io/qwik';
import {
  Select,
  SelectListbox,
  SelectOption,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from '@qwik-ui/headless';

export const SelectInput = component$(() => {

  // useStyles$(scopedStyle);
  return (
    <Select >
      <div >
        <div >
          <SelectTrigger >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
        </div>
      </div>
      <SelectPopover >
        <div >
          <SelectListbox >
            <SelectOption>1</SelectOption>
            <SelectOption>2</SelectOption>
          </SelectListbox>
        </div>
      </SelectPopover>
    </Select>
  );
});
