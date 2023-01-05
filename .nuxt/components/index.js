export { default as ContractsList } from '../..\\components\\Contracts\\list.vue'
export { default as ContractsList2 } from '../..\\components\\Contracts\\list_2.vue'
export { default as CustomerAllService } from '../..\\components\\Customer\\allService.vue'
export { default as CustomerDomainService } from '../..\\components\\Customer\\domainService.vue'
export { default as CustomerList } from '../..\\components\\Customer\\list.vue'
export { default as DashboardExpiredTable } from '../..\\components\\Dashboard\\expiredTable.vue'
export { default as LayoutFooter } from '../..\\components\\Layout\\footer.vue'
export { default as LayoutMenu } from '../..\\components\\Layout\\menu.vue'
export { default as LayoutNavbar } from '../..\\components\\Layout\\navbar.vue'
export { default as UserList } from '../..\\components\\User\\list.vue'
export { default as WidgetCard } from '../..\\components\\Widget\\card.vue'
export { default as WidgetInfoCard } from '../..\\components\\Widget\\infoCard.vue'
export { default as WidgetPlayer } from '../..\\components\\Widget\\player.vue'
export { default as DashboardCardProvider } from '../..\\components\\Dashboard\\Card\\provider.vue'
export { default as DashboardCardStatic } from '../..\\components\\Dashboard\\Card\\static.vue'
export { default as DashboardCharts } from '../..\\components\\Dashboard\\Charts\\index.vue'
export { default as DashboardStatistical } from '../..\\components\\Dashboard\\Statistical\\index.vue'
export { default as DashboardStatisticalServiceMonth } from '../..\\components\\Dashboard\\Statistical\\serviceMonth.vue'
export { default as DashboardStatisticalServiceYear } from '../..\\components\\Dashboard\\Statistical\\serviceYear.vue'
export { default as PlansContentCard } from '../..\\components\\Plans\\Content\\card.vue'
export { default as PlansDomainList } from '../..\\components\\Plans\\Domain\\list.vue'
export { default as PlansEmailCard } from '../..\\components\\Plans\\Email\\card.vue'
export { default as PlansFacebookCard } from '../..\\components\\Plans\\Facebook\\card.vue'
export { default as PlansGoogleCard } from '../..\\components\\Plans\\Google\\card.vue'
export { default as PlansHostingCard } from '../..\\components\\Plans\\Hosting\\card.vue'
export { default as PlansMaintenanceCard } from '../..\\components\\Plans\\Maintenance\\card.vue'
export { default as PlansSslCard } from '../..\\components\\Plans\\Ssl\\card.vue'
export { default as ServicesContentList } from '../..\\components\\Services\\Content\\list.vue'
export { default as ServicesDomainList } from '../..\\components\\Services\\Domain\\list.vue'
export { default as ServicesEmailList } from '../..\\components\\Services\\Email\\list.vue'
export { default as ServicesFacebookList } from '../..\\components\\Services\\Facebook\\list.vue'
export { default as ServicesGoogleList } from '../..\\components\\Services\\Google\\list.vue'
export { default as ServicesHostingList } from '../..\\components\\Services\\Hosting\\list.vue'
export { default as ServicesMaintenanceList } from '../..\\components\\Services\\Maintenance\\list.vue'
export { default as ServicesSslList } from '../..\\components\\Services\\Ssl\\list.vue'
export { default as UserRoleList } from '../..\\components\\User\\Role\\list.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
