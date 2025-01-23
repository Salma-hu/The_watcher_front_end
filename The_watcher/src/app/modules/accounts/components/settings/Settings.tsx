import {ProfileDetails} from './cards/ProfileDetails'
import {SignInMethod} from './cards/SignInMethod'
import {EmailPreferences} from './cards/EmailPreferences'
import {Notifications} from './cards/Notifications'
import {DeactivateAccount} from './cards/DeactivateAccount'
import { Content } from '../../../../../_metronic/layout/components/content'

export function Settings() {
  return (
    <Content>
      <ProfileDetails />
      <SignInMethod />
      <EmailPreferences />
      <Notifications />
      <DeactivateAccount />
    </Content>
  )
}
