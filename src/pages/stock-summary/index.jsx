import React from 'react'

import DefaultLayout from '@/layouts/DefaultLayout'
import StockSummaryFilters from './com/StockSummaryFilters'
import GreetingBanner from './com/GreetingBanner'
import StockOverview from './com/StockOverview'
import MonthlyStockMovement from './com/MonthlyStockMovement'
import ProductStock from './com/ProductStock'

function StockSummary() {
  return (
    <DefaultLayout>
      <StockSummaryFilters />
      <GreetingBanner />
      <StockOverview />
      <MonthlyStockMovement />
      <ProductStock />
    </DefaultLayout>
  )
}

export default StockSummary