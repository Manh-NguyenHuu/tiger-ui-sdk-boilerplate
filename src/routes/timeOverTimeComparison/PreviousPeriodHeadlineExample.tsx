// (C) 2007-2020 GoodData Corporation

import React, { Component } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newPreviousPeriodMeasure, newRelativeDateFilter } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../md";
import { OnLoadingChanged, OnError } from "@gooddata/sdk-ui";

export class PreviousPeriodHeadlineExample extends Component {
    public onLoadingChanged: OnLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    };

    public onError: OnError = (...params): void => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    };

    public render(): React.ReactNode {
        const primaryMeasure = LdmExt.SumOfPrice;
        const secondaryMeasure = newPreviousPeriodMeasure(
            LdmExt.SumOfPrice,
            [{ dataSet: Ldm.DateDatasets.Date.identifier, periodsAgo: 1 }],
            (m) => m.alias("$ Total Sales - period ago"),
        );

        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    filters={[newRelativeDateFilter(Ldm.DateDatasets.Date.identifier, "GDC.time.year", 0, 0)]}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineExample;
