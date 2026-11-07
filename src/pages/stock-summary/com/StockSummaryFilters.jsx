import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLable,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { monthOptions, warehouseOptions } from "@/data/mock/stock-summary"

function StockSummaryFilters() {
  return (
    <div className="flex flex-warp items-center justify-end gap-3">
        <Select items={warehouseOptions} defaultValue="all">
        <SelectTrigger className="w-full sm:min-w-60 sm:w-auto" >
            

        </SelectTrigger>
        </Select>


    </div>
  )
}

export default StockSummaryFilters