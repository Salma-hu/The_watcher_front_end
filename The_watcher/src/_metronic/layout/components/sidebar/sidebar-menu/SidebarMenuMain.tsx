import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem to='/dashboard' icon='element-11' title='Home' fontIcon='bi-app-indicator'/>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>

      <SidebarMenuItemWithSub to='/crafted/pages' title='Scanner Bot' fontIcon='bi-archive' icon='element-plus'>

        {/* <SidebarMenuItem to='/crafted/pages/wizards' title='Scan Scope' hasBullet={true}/> */}
        <SidebarMenuItem to='crafted/pages/wizards/horizontal' title='Scan Scope' hasBullet={true}/>
        <SidebarMenuItem to='/crafted/pages/profile' title='Scan History' hasBullet={true}/>

      </SidebarMenuItemWithSub>


      <SidebarMenuItemWithSub to='/crafted/pages' title='Trading Bot' fontIcon='bi-archive' icon='element-plus'>

        {/* <SidebarMenuItem to='/crafted/pages/wizards' title='Scan Scope' hasBullet={true}/> */}
        <SidebarMenuItem to='crafted/pages/wizards/horizontal' title='Scan Scope' hasBullet={true}/>
        <SidebarMenuItem to='/crafted/pages/profile' title='Scan History' hasBullet={true}/>

      </SidebarMenuItemWithSub>


      {/* <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub> */}

      <SidebarMenuItemWithSub to='/crafted/widgets' title='Widgets' fontIcon='bi-layers'>


        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Settings</span>
        </div>
      </div>
      {/* <SidebarMenuItem to='/crafted/account/overview' title='Accounts' icon='profile-circle' fontIcon='bi-person'/> */}

      <SidebarMenuItem to='/apps/user-management/users' icon='abstract-28' title='User management' fontIcon='bi-layers' />

    </>
  )
}

export {SidebarMenuMain}
