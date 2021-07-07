// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newArithmeticMeasure } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";

const averageStateDailyCosts = newArithmeticMeasure(
    [LdmExt.SumOfPrice, LdmExt.SumOfQuantity],
    "multiplication",
    (m) => m.format("#,##0").title("$ Avg State Daily Costs"),
);

const measures = [LdmExt.SumOfPrice, LdmExt.SumOfQuantity, averageStateDailyCosts];

const rows = [Ldm.CampaignId];
const style = { height: 200 };

export const ArithmeticMeasureMultiplicationExample: React.FC = () => {
    return (
        <div style={style} className="s-table">
            <PivotTable measures={measures} rows={rows} />
        </div>
    );
};
