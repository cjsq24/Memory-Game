import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMUI,
  SelectChangeEvent,
} from '@mui/material'

type TProps = {
  id: string
  label: string
  value: string
  onChange: (e: SelectChangeEvent) => void
  valueList: string[]
}

export default function Select({ id, label, value, onChange, valueList }: TProps) {
  return (
    <FormControl fullWidth margin='normal'>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <SelectMUI
        labelId={`${id}-label`}
        id={`${id}-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        {valueList.map((v) => (
          <MenuItem key={v} value={v}>
            {v}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  )
}
