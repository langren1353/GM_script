export interface OptionsProps {
  value: string
  label: string
  disabled: string
}

export interface RadioItem {
  value: string | number | boolean
  label: string
  slot?: string
  disabled?: boolean
}
