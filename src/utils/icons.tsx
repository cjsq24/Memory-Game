import {
  AccessAlarm,
  AcUnit,
  Accessibility,
  AccountBalance,
  AddBox,
  Adjust,
  AirplanemodeActive,
  AllInclusive,
  Apple,
  ArrowForward,
  Attachment,
  Audiotrack,
  AutoAwesome,
  Backspace,
  Backup,
  BatteryFull,
  Bedtime,
  Block,
  Bluetooth,
  Bolt,
  Bookmark,
  BorderAll,
  Brightness7,
  Build,
  Cached,
  Cake,
  Call,
  CameraAlt,
  Cancel,
  Chair,
  ClosedCaption,
  Cloud,
  Comment,
  ContactMail,
  ContentCopy,
  ContentCut,
  Copyright,
  Create,
  CropRotate,
  Css,
  Dashboard,
  DataObject,
  DataArray,
  DensityMedium,
  DesktopWindows,
  Dialpad,
  Dining,
  DirectionsCar,
  DoNotTouch,
  DoneAll,
  Drafts,
  Download,
  DoubleArrow,
} from '@mui/icons-material'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

type IIcon = OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
  muiName: string
}
export interface IArrayIcon {
  icon: IIcon
  key: string
  color: string
}

const getVarName = (component: any) => {
  return Object.keys(component)[0]
}

export const icons: IArrayIcon[] = [
  { icon: AccessAlarm, key: getVarName({ AccessAlarm }), color: 'gray' },
  { icon: AcUnit, key: getVarName({ AcUnit }), color: 'lightgray' },
  { icon: Accessibility, key: getVarName({ Accessibility }), color: 'red' },
  { icon: AccountBalance, key: getVarName({ AccountBalance }), color: 'blue' },
  { icon: AddBox, key: getVarName({ AddBox }), color: 'orange' },
  { icon: Adjust, key: getVarName({ Adjust }), color: 'yellow' },
  { icon: AirplanemodeActive, key: getVarName({ AirplanemodeActive }), color: 'black' },
  { icon: AllInclusive, key: getVarName({ AllInclusive }), color: 'navy' },
  { icon: Apple, key: getVarName({ Apple }), color: 'aqua' },
  { icon: ArrowForward, key: getVarName({ ArrowForward }), color: 'aquamarine' },
  { icon: Attachment, key: getVarName({ Attachment }), color: 'fuchsia' },
  { icon: Audiotrack, key: getVarName({ Audiotrack }), color: 'tomato' },
  { icon: AutoAwesome, key: getVarName({ AutoAwesome }), color: 'bisque' },
  { icon: Backspace, key: getVarName({ Backspace }), color: 'blanchedalmond' },
  { icon: Backup, key: getVarName({ Backup }), color: 'blueviolet' },
  { icon: BatteryFull, key: getVarName({ BatteryFull }), color: 'brown' },
  { icon: Bedtime, key: getVarName({ Bedtime }), color: 'cadetblue' },
  { icon: Block, key: getVarName({ Block }), color: 'chocolate' },
  { icon: Bluetooth, key: getVarName({ Bluetooth }), color: 'crimson' },
  { icon: Bolt, key: getVarName({ Bolt }), color: 'cyan' },
  { icon: Bookmark, key: getVarName({ Bookmark }), color: 'darkblue' },
  { icon: BorderAll, key: getVarName({ BorderAll }), color: 'papayawhip' },
  { icon: Brightness7, key: getVarName({ Brightness7 }), color: 'darkgrey' },
  { icon: Build, key: getVarName({ Build }), color: 'darkgreen' },
  { icon: Cached, key: getVarName({ Cached }), color: 'darkmagenta' },
  { icon: Cake, key: getVarName({ Cake }), color: 'darkred' },
  { icon: Call, key: getVarName({ Call }), color: 'darksalmon' },
  { icon: CameraAlt, key: getVarName({ CameraAlt }), color: 'darkturquoise' },
  { icon: Cancel, key: getVarName({ Cancel }), color: 'darkviolet' },
  { icon: Chair, key: getVarName({ Chair }), color: 'forestgreen' },
  { icon: ClosedCaption, key: getVarName({ ClosedCaption }), color: 'gold' },
  { icon: Cloud, key: getVarName({ Cloud }), color: 'hotpink' },
  { icon: Comment, key: getVarName({ Comment }), color: 'green' },
  { icon: ContactMail, key: getVarName({ ContactMail }), color: 'indigo' },
  { icon: ContentCopy, key: getVarName({ ContentCopy }), color: 'ivory' },
  { icon: ContentCut, key: getVarName({ ContentCut }), color: 'khaki' },
  { icon: Copyright, key: getVarName({ Copyright }), color: 'lavender' },
  { icon: Create, key: getVarName({ Create }), color: 'lavenderblush' },
  { icon: CropRotate, key: getVarName({ CropRotate }), color: 'lawngreen' },
  { icon: Css, key: getVarName({ Css }), color: 'lightcoral' },
  { icon: Dashboard, key: getVarName({ Dashboard }), color: 'lightcyan' },
  { icon: DataObject, key: getVarName({ DataObject }), color: 'lightpink' },
  { icon: DataArray, key: getVarName({ DataArray }), color: 'lightsalmon' },
  { icon: DensityMedium, key: getVarName({ DensityMedium }), color: 'orangered' },
  { icon: DesktopWindows, key: getVarName({ DesktopWindows }), color: 'lime' },
  { icon: Dialpad, key: getVarName({ Dialpad }), color: 'limegreen' },
  { icon: Dining, key: getVarName({ Dining }), color: 'steelblue' },
  { icon: DirectionsCar, key: getVarName({ DirectionsCar }), color: 'magenta' },
  { icon: DoNotTouch, key: getVarName({ DoNotTouch }), color: 'maroon' },
  { icon: DoneAll, key: getVarName({ DoneAll }), color: 'mediumaquamarine' },
  { icon: Drafts, key: getVarName({ Drafts }), color: 'midnightblue' },
  { icon: Download, key: getVarName({ Download }), color: 'mintcream' },
  { icon: DoubleArrow, key: getVarName({ DoubleArrow }), color: 'olive' },
]
