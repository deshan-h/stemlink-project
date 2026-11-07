import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { monthOptions, warehouseOptions } from "@/data/mock/stock-summary"

function StockSummaryFilters() {
  return (
    <div className="flex flex-warp items-center justify-end gap-3">
      <Select items={warehouseOptions} defaultValue="all">
        <SelectTrigger className="w-full sm:min-w-60 sm:w-auto" >
          <SelectValue placeholder="Select a Warehouse" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Warehouse</SelectLabel>
            {warehouseOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select items={monthOptions} defaultValue="2026-08">
        <SelectTrigger className="w-full sm:min-w-60 sm:w-auto">
          <SelectValue placeholder="Select a month" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectValue>Month</SelectValue>
            {monthOptions.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default StockSummaryFilters