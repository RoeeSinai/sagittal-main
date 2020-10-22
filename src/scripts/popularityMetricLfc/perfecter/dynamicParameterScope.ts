import {Ed, Window} from "../../../general"
import {DynamicParameterScope} from "../bestMetric"
import {popularityMetricLfcScriptGroupSettings} from "../globals"
import {ParameterValue} from "../sumOfSquares"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    window: popularityMetricLfcScriptGroupSettings.maxUnit as number as Window<ParameterValue>,
    ed: 3 as Ed<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
