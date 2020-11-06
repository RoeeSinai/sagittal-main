import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("solve-best-complexity-metric", (): void => {
    it("checks each comma in the JI notation to verify if it is the best (by LPEI) in its zone (Extreme capture zone, by default, but can be configured for secondary comma zone) and if not gives the JI notation one point (which is bad)", (): void => {
        onlyRunInCi()

        const script = `npm run ji-notation-badness` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "221/7n badness: 14.665",
            "1u badness: 0.001 * actual comma",
            "badness score for 1u's zone: 0",
            "",
            "169/125n badness: 12.147",
            "37/25n badness: 11.882",
            "1/455n badness: 6.543 * actual comma",
            "1/205n badness: 9.278",
            "2695n badness: 19.878",
            "25/19n badness: 18.302",
            "4375n badness: 7.626",
            "badness score for 1/455n's zone: 0",
            "",
            "7/425n badness: 8.300",
            "253/5n badness: 8.512",
            "19/77n badness: 14.784",
            "119/11n badness: 11.525",
            "77/13n badness: 10.936",
            "65/77n badness: 8.036 * actual comma",
            "125/13n badness: 8.404",
            "badness score for 65/77n's zone: 0",
            "",
            "19/5n badness: 5.504 * actual comma",
            "7/605n badness: 11.670",
            "1/539n badness: 7.081",
            "1/341n badness: 8.599",
            "35/23n badness: 19.319",
            "2275n badness: 10.112",
            "badness score for 19/5n's zone: 0",
            "",
            "11/625s badness: 7.864",
            "49/275s badness: 8.419",
            "23/17s badness: 11.426",
            "5s badness: 1.504 * actual comma",
            "badness score for 5s's zone: 0",
            "",
            "169/25s badness: 7.767",
            "2401/5s badness: 8.705",
            "1/91s badness: 5.649 * actual comma",
            "77s badness: 6.287",
            "5/133s badness: 8.519",
            "25/187s badness: 9.077",
            "21875s badness: 8.221",
            "badness score for 1/91s's zone: 0",
            "",
            "1/3025s badness: 11.991",
            "1/259s badness: 14.767",
            "1/319s badness: 9.165",
            "29/11s badness: 19.603",
            "19s badness: 4.519 * actual comma",
            "5/539s badness: 7.571",
            "65s badness: 11.198",
            "badness score for 19s's zone: 0",
            "",
            "11/125s badness: 6.957",
            "289/5s badness: 10.448",
            "49/55s badness: 6.620 * actual comma",
            "badness score for 49/55s's zone: 0",
            "",
            "169/5k badness: 7.210",
            "203/5s badness: 8.559",
            "23/49s badness: 8.746",
            "7/31s badness: 9.593",
            "5/91s badness: 28.090",
            "385k badness: 6.095 * actual comma",
            "25/133s badness: 7.736",
            "badness score for 385k's zone: 0",
            "",
            "13/175k badness: 7.320",
            "1/425k badness: 8.318",
            "1/115k badness: 8.617",
            "187/7k badness: 9.429",
            "11/13k badness: 5.353 * actual comma",
            "badness score for 11/13k's zone: 0",
            "",
            "1/6125k badness: 7.239",
            "1/605k badness: 7.001",
            "31/11k badness: 8.229 * actual comma",
            "1/323k badness: 7.652",
            "95k badness: 9.442",
            "25/539k badness: 11.910",
            "325k badness: 6.203",
            "badness score for 31/11k's zone: 1",
            "",
            "11/25k badness: 27.336",
            "37/35k badness: 8.739",
            "19/91k badness: 9.881",
            "289k badness: 7.428",
            "11/37k badness: 8.270",
            "49/11k badness: 8.098",
            "5/7k badness: 2.912 * actual comma",
            "badness score for 5/7k's zone: 0",
            "",
            "7/715k badness: 9.281",
            "343/5k badness: 6.816 * actual comma",
            "1/637k badness: 8.217",
            "169k badness: 17.911",
            "7/209k badness: 8.856",
            "203k badness: 7.758",
            "91/17k badness: 7.956",
            "1925k badness: 8.070",
            "3125k badness: 18.011",
            "badness score for 343/5k's zone: 0",
            "",
            "119/25k badness: 7.710",
            "13/35k badness: 9.595",
            "1/85k badness: 5.458 * actual comma",
            "29/19k badness: 20.453",
            "361k badness: 8.171",
            "55/13k badness: 6.827",
            "badness score for 1/85k's zone: 0",
            "",
            "1/1225k badness: 7.352 * actual comma",
            "143/25k badness: 8.027",
            "19/7k badness: 9.657",
            "1/121k badness: 5.822",
            "5/323k badness: 14.628",
            "1625k badness: 7.449",
            "badness score for 1/1225k's zone: 1",
            "",
            "49/625k badness: 8.718",
            "11/875k badness: 9.230",
            "1/215k badness: 8.488",
            "7/55k badness: 12.058",
            "37/7k badness: 19.430",
            "391k badness: 19.940",
            "217k badness: 8.045",
            "35/29k badness: 9.963",
            "25/7k badness: 3.708 * actual comma",
            "25/221k badness: 10.950",
            "badness score for 25/7k's zone: 0",
            "",
            "169/35k badness: 9.547",
            "23/55k badness: 9.609",
            "1/377k badness: 12.303",
            "13/23k badness: 7.179",
            "343k badness: 5.295 * actual comma",
            "5/637k badness: 7.853",
            "15625k badness: 7.815",
            "badness score for 343k's zone: 0",
            "",
            "161/25k badness: 9.373",
            "1/805k badness: 8.331",
            "119/5k badness: 10.555",
            "49/65k badness: 7.164",
            "29/13k badness: 10.205",
            "1/17k badness: 4.757 * actual comma",
            "275/13k badness: 19.571",
            "badness score for 1/17k's zone: 0",
            "",
            "11/175k badness: 6.800",
            "1/725k badness: 9.026",
            "1/43k badness: 10.740",
            "29k badness: 8.356",
            "7/11k badness: 4.390 * actual comma",
            "125/7k badness: 7.210",
            "badness score for 7/11k's zone: 0",
            "",
            "1/715k badness: 7.842",
            "19/85k badness: 8.343",
            "169/7k badness: 7.251",
            "11/133k badness: 19.970",
            "31/13k badness: 8.163",
            "13/17k badness: 18.261",
            "1715k badness: 8.032",
            "275k badness: 6.246 * actual comma",
            "badness score for 275k's zone: 0",
            "",
            "17/25k badness: 10.139",
            "13/245k badness: 7.846",
            "161/5k badness: 7.519",
            "847/5k badness: 19.751",
            "1/847k badness: 9.000",
            "1/161k badness: 6.893",
            "49/13k badness: 7.032 * actual comma",
            "55/91k badness: 9.372",
            "badness score for 49/13k's zone: 1",
            "",
            "1/1375k badness: 10.421",
            "1/8575k badness: 8.318 * actual comma",
            "11/115k badness: 20.236",
            "17/19k badness: 7.080",
            "143k badness: 8.188",
            "7/247k badness: 10.735",
            "77/17k badness: 7.898",
            "475/7k badness: 8.704",
            "badness score for 1/8575k's zone: 1",
            "",
            "7/625C badness: 6.984",
            "11/35C badness: 6.408",
            "1/145k badness: 29.363",
            "43/5k badness: 8.575",
            "145C badness: 7.346",
            "1045k badness: 14.846",
            "35/11k badness: 5.585 * actual comma",
            "25/49k badness: 11.740",
            "25/31C badness: 8.772",
            "badness score for 35/11k's zone: 0",
            "",
            "121/25C badness: 8.693",
            "7/475C badness: 9.111",
            "17/77C badness: 29.821",
            "1/143C badness: 5.946 * actual comma",
            "19/17C badness: 9.182",
            "49C badness: 15.339",
            "5/209C badness: 19.756",
            "65/17C badness: 8.039",
            "1375C badness: 6.746",
            "badness score for 1/143C's zone: 0",
            "",
            "17/5C badness: 5.105 * actual comma",
            "13/49C badness: 6.603",
            "1/119C badness: 6.913",
            "1/47C badness: 11.200",
            "161C badness: 7.702",
            "5/847C badness: 8.158",
            "5/161C badness: 13.832",
            "badness score for 17/5C's zone: 0",
            "",
            "1/1715C badness: 6.636",
            "143/35C badness: 14.486",
            "23/19C badness: 9.218",
            "13/31C badness: 9.391",
            "11/23C badness: 7.370 * actual comma",
            "133/11C badness: 8.245",
            "7/169C badness: 18.857",
            "85/19C badness: 10.561",
            "badness score for 11/23C's zone: 1",
            "",
            "7/125C badness: 5.076 * actual comma",
            "43C badness: 6.996",
            "155C badness: 8.884",
            "175/11C badness: 13.103",
            "125/49C badness: 6.692",
            "badness score for 7/125C's zone: 0",
            "",
            "121/5C badness: 6.367",
            "47/7C badness: 9.751",
            "5/143C badness: 8.829",
            "245C badness: 5.111 * actual comma",
            "25/209C badness: 8.938",
            "725C badness: 8.965",
            "6875C badness: 9.451",
            "badness score for 245C's zone: 0",
            "",
            "13/275C badness: 7.832",
            "17C badness: 4.430 * actual comma",
            "7/13C badness: 5.364",
            "65/49C badness: 18.717",
            "5/119C badness: 6.798",
            "badness score for 17C's zone: 0",
            "",
            "1/845C badness: 9.086",
            "637/5C badness: 14.269",
            "1/343C badness: 8.846",
            "143/7C badness: 7.374 * actual comma",
            "23/13C badness: 29.075",
            "13/29C badness: 8.056",
            "5/47C badness: 8.203",
            "55/23C badness: 8.315",
            "badness score for 143/7C's zone: 0",
            "",
            "7/25C badness: 5.893 * actual comma",
            "11/245C badness: 7.769",
            "7/37C badness: 7.682",
            "931C badness: 10.459",
            "5/11C badness: 6.275",
            "215C badness: 9.683",
            "625/49C badness: 7.843",
            "badness score for 7/25C's zone: 0",
            "",
            "1/1625C badness: 8.210",
            "1/475C badness: 7.976",
            "323/5C badness: 8.260",
            "1/1001C badness: 14.632",
            "121C badness: 6.173",
            "1225C badness: 6.046 * actual comma",
            "1375/7C badness: 20.149",
            "badness score for 1225C's zone: 0",
            "",
            "13/55C badness: 7.043",
            "13/343C badness: 9.990",
            "1/361C badness: 8.165",
            "23C badness: 5.612 * actual comma",
            "85C badness: 17.122",
            "35/13C badness: 5.814",
            "25/119C badness: 8.892",
            "badness score for 23C's zone: 0",
            "",
            "1/1925C badness: 7.580",
            "91/25C badness: 9.210",
            "1/12005C badness: 12.522",
            "17/91C badness: 11.578",
            "1/203C badness: 8.505",
            "1/169C badness: 6.149 * actual comma",
            "715/7C badness: 8.513",
            "55/17C badness: 8.484",
            "badness score for 1/169C's zone: 0",
            "",
            "1/125C badness: 9.949",
            "11/49C badness: 5.820 * actual comma",
            "37/11C badness: 9.567",
            "1/289C badness: 29.302",
            "91/19C badness: 8.553",
            "35/37C badness: 8.942",
            "25/11C badness: 5.227",
            "badness score for 11/49C's zone: 1",
            "",
            "539/25C badness: 8.240",
            "1/95C badness: 5.774",
            "323C badness: 8.386",
            "11/31C badness: 8.074 * actual comma",
            "133/13C badness: 8.709",
            "7/41C badness: 12.128",
            "5/1001C badness: 8.971",
            "1105C badness: 9.028",
            "605C badness: 49.534",
            "6125C badness: 10.883",
            "badness score for 11/31C's zone: 1",
            "",
            "17/7C badness: 6.963 * actual comma",
            "13/11C badness: 47.752",
            "29/17C badness: 8.651",
            "7/187C badness: 7.960",
            "115C badness: 6.291",
            "175/13C badness: 8.473",
            "badness score for 17/7C's zone: 1",
            "",
            "133/25C badness: 19.376",
            "1/385C badness: 17.606",
            "41/5C badness: 14.455",
            "91/5C badness: 6.097 * actual comma",
            "1/2401C badness: 7.440",
            "49/23C badness: 8.357",
            "95/11C badness: 8.770",
            "5/169C badness: 7.393",
            "badness score for 91/5C's zone: 0",
            "",
            "1/25C badness: 2.225 * actual comma",
            "49/121C badness: 9.124",
            "55/49C badness: 8.666",
            "125/11C badness: 6.784",
            "badness score for 1/25C's zone: 0",
            "",
            "539/5C badness: 8.823",
            "121/7C badness: 7.552",
            "169/11C badness: 8.390",
            "1/19C badness: 5.781 * actual comma",
            "437C badness: 8.516",
            "11/29C badness: 7.864",
            "259C badness: 8.359",
            "175C badness: 8.226",
            "badness score for 1/19C's zone: 0",
            "",
            "13/625C badness: 19.843",
            "13/385C badness: 9.337",
            "1/253C badness: 7.508 * actual comma",
            "31/17C badness: 10.878",
            "85/7C badness: 6.644",
            "575C badness: 9.708",
            "badness score for 1/253C's zone: 1",
            "",
            "1/21875C badness: 11.826",
            "19/125C badness: 9.466",
            "41C badness: 7.298",
            "91C badness: 5.582 * actual comma",
            "49/17C badness: 7.758",
            "5/2401C badness: 8.162",
            "5/37C badness: 8.222",
            "25/169C badness: 50.145",
            "badness score for 91C's zone: 0",
            "",
            "1/5C badness: 0.669 * actual comma",
            "11/343C badness: 14.558",
            "13/19C badness: 10.574",
            "625/11C badness: 29.702",
            "badness score for 1/5C's zone: 0",
            "",
            "1/2275C badness: 7.742",
            "341C badness: 20.082",
            "605/7C badness: 7.960",
            "875C badness: 5.767 * actual comma",
            "badness score for 875C's zone: 0",
            "",
            "77/65C badness: 50.530",
            "13/77C badness: 7.092",
            "1/187C badness: 10.903",
            "77/19C badness: 8.352",
            "115/7C badness: 14.494",
            "5/253C badness: 9.055",
            "425/7C badness: 8.433",
            "25/13C badness: 6.020 * actual comma",
            "badness score for 25/13C's zone: 0",
            "",
            "19/25C badness: 6.485 * actual comma",
            "1/2695C badness: 8.062",
            "7/23C badness: 7.915",
            "935C badness: 10.564",
            "455C badness: 28.495",
            "badness score for 19/25C's zone: 0",
            "",
            "3C badness: 6.328 * actual comma",
            "7/221C badness: 8.095",
            "205C badness: 8.360",
            "65/19C badness: 8.112",
            "25/37C badness: 8.028",
            "125/77C badness: 9.001",
            "badness score for 3C's zone: 0",
            "",
            "1/455C badness: 8.487",
            "1/133C badness: 6.716",
            "95/13C badness: 10.638",
            "4375C badness: 7.039 * actual comma",
            "badness score for 4375C's zone: 1",
            "",
            "169/125C badness: 8.415",
            "77/5C badness: 6.083 * actual comma",
            "badness score for 77/5C's zone: 0",
            "",
            "11/325C badness: 8.850",
            "119/11C badness: 7.733",
            "49/143C badness: 12.391",
            "65/77C badness: 9.109",
            "5/187C badness: 7.845",
            "125/13C badness: 6.857 * actual comma",
            "badness score for 125/13C's zone: 0",
            "",
            "19/5C badness: 5.604 * actual comma",
            "1/539C badness: 7.181",
            "badness score for 19/5C's zone: 0",
            "",
            "13C badness: 4.535 * actual comma",
            "35/23C badness: 7.570",
            "badness score for 13C's zone: 0",
            "",
            "11/625C badness: 9.916",
            "49/275C badness: 8.290",
            "1/35C badness: 5.501 * actual comma",
            "1/341C badness: 12.073",
            "1/299C badness: 7.931",
            "23/17C badness: 7.550",
            "badness score for 1/35C's zone: 0",
            "",
            "343/125C badness: 11.676",
            "169/25C badness: 8.947",
            "77C badness: 4.848 * actual comma",
            "5/133C badness: 6.951",
            "185C badness: 8.428",
            "25/41C badness: 10.010",
            "21875C badness: 19.663",
            "badness score for 77C's zone: 0",
            "",
            "1/2125C badness: 8.569",
            "1/575C badness: 29.637",
            "11/65C badness: 6.577 * actual comma",
            "25/187C badness: 8.505",
            "625/13C badness: 11.626",
            "badness score for 11/65C's zone: 0",
            "",
            "1/3025C badness: 8.101",
            "1/319C badness: 8.262",
            "19C badness: 46.852",
            "833C badness: 9.156",
            "5/539C badness: 49.898",
            "65C badness: 4.614 * actual comma",
            "35/17C badness: 13.632",
            "badness score for 65C's zone: 0",
            "",
            "289/5C badness: 8.138",
            "49/55C badness: 28.531",
            "1/7C badness: 1.741 * actual comma",
            "badness score for 1/7C's zone: 0",
            "",
            "343/25C badness: 7.125",
            "1/3185C badness: 8.801",
            "203/5C badness: 9.027",
            "7/31C badness: 7.151",
            "385C badness: 9.611",
            "25/133C badness: 11.123",
            "625C badness: 6.518 * actual comma",
            "badness score for 625C's zone: 0",
            "",
            "13/175C badness: 49.762",
            "1/425C badness: 6.718",
            "1/3773C badness: 9.539",
            "247C badness: 7.665",
            "11/13C badness: 6.499 * actual comma",
            "55/19C badness: 8.437",
            "125/91C badness: 12.340",
            "badness score for 11/13C's zone: 0",
            "",
            "1/6125C badness: 18.765",
            "143/125C badness: 8.450",
            "19/35C badness: 8.041",
            "1/605C badness: 8.013",
            "325C badness: 6.681 * actual comma",
            "175/17C badness: 8.487",
            "badness score for 325C's zone: 0",
            "",
            "7/275C badness: 8.017",
            "289C badness: 9.428",
            "11/37C badness: 50.651",
            "119/13C badness: 8.251",
            "7/29C badness: 7.687",
            "5/7C badness: 2.599 * actual comma",
            "5/221C badness: 8.503",
            "badness score for 5/7C's zone: 0",
            "",
            "343/5C badness: 6.274",
            "1/637C badness: 7.146",
            "11C badness: 7.004",
            "7/209C badness: 8.209",
            "91/17C badness: 19.488",
            "3125C badness: 6.133 * actual comma",
            "badness score for 3125C's zone: 0",
            "",
            "119/25C badness: 50.132",
            "1/85C badness: 8.812",
            "49/95C badness: 15.231",
            "29/19C badness: 8.570",
            "85/11C badness: 7.923 * actual comma",
            "badness score for 85/11C's zone: 0",
            "",
            "143/25C badness: 7.820",
            "19/7C badness: 5.727 * actual comma",
            "25/23C badness: 8.081",
            "badness score for 19/7C's zone: 0",
            "",
            "11/875C badness: 8.266",
            "7/55C badness: 5.412 * actual comma",
            "391C badness: 8.177",
            "25/7C badness: 25.452",
            "25/221C badness: 8.467",
            "badness score for 7/55C's zone: 0",
            "",
            "169/35C badness: 8.032",
            "1/215C badness: 50.826",
            "29/5C badness: 7.378",
            "13/85C badness: 9.403",
            "1/377C badness: 8.491",
            "1/31C badness: 13.050",
            "13/23C badness: 9.146",
            "217C badness: 9.148",
            "343C badness: 16.804",
            "5/637C badness: 13.951",
            "55C badness: 4.488 * actual comma",
            "35/29C badness: 8.453",
            "15625C badness: 7.818",
            "badness score for 55C's zone: 0",
            "",
            "17/125C badness: 8.639",
            "161/25C badness: 8.396",
            "1/805C badness: 8.811",
            "49/65C badness: 10.622",
            "11/91C badness: 7.551 * actual comma",
            "13/121C badness: 8.187",
            "49/19C badness: 8.011",
            "235C badness: 11.093",
            "badness score for 11/91C's zone: 0",
            "",
            "1/6875C badness: 50.580",
            "17/95C badness: 8.727",
            "143/5C badness: 28.610",
            "7/47C badness: 50.681",
            "95/7C badness: 8.241",
            "325/7C badness: 8.055",
            "125/23C badness: 8.395 * actual comma",
            "badness score for 125/23C's zone: 1",
            "",
            "7/3125C badness: 7.980",
            "11/175C badness: 13.006",
            "43/25C badness: 8.748",
            "209C badness: 8.195",
            "7/11C badness: 4.781 * actual comma",
            "5/49C badness: 5.633",
            "badness score for 7/11C's zone: 0",
            "",
            "121/125S badness: 9.021",
            "1/715S badness: 7.466",
            "19/85S badness: 30.064",
            "49/5S badness: 6.017",
            "169/7S badness: 10.690",
            "1/209S badness: 8.836",
            "31/13S badness: 50.555",
            "29S badness: 5.845",
            "13/17S badness: 6.346 * actual comma",
            "5/31S badness: 7.290",
            "275S badness: 5.653",
            "badness score for 13/17S's zone: 1",
            "",
            "17/25S badness: 6.303 * actual comma",
            "7/325S badness: 11.347",
            "13/245S badness: 8.790",
            "1/595S badness: 7.669",
            "161/5S badness: 13.714",
            "55/91S badness: 7.696",
            "badness score for 17/25S's zone: 0",
            "",
            "1/8575S badness: 8.278",
            "1/235S badness: 9.572",
            "11/115S badness: 8.442",
            "1/847S badness: 7.435",
            "17/19S badness: 28.920",
            "7/247S badness: 8.341 * actual comma",
            "77/17S badness: 9.825",
            "125/17S badness: 10.472",
            "badness score for 7/247S's zone: 1",
            "",
            "43/5S badness: 7.833",
            "85/13S badness: 8.900",
            "25/49S badness: 5.059 * actual comma",
            "badness score for 25/49S's zone: 0",
            "",
            "7/625S badness: 6.715",
            "31S badness: 6.596 * actual comma",
            "5/29S badness: 10.695",
            "1045S badness: 8.211",
            "badness score for 31S's zone: 0",
            "",
            "121/25S badness: 7.088",
            "1/143S badness: 27.647",
            "49S badness: 3.537 * actual comma",
            "5/209S badness: 7.825",
            "145S badness: 9.132",
            "65/17S badness: 7.985",
            "25/31S badness: 7.629",
            "1375S badness: 18.215",
            "badness score for 49S's zone: 0",
            "",
            "23/25S badness: 9.720",
            "17/5S badness: 6.141 * actual comma",
            "7/65S badness: 6.160",
            "1/119S badness: 6.157",
            "badness score for 17/5S's zone: 0",
            "",
            "1/1715S badness: 48.872",
            "143/35S badness: 7.920",
            "23/19S badness: 7.616",
            "1/47S badness: 7.211",
            "11/23S badness: 7.430 * actual comma",
            "133/11S badness: 11.515",
            "95/49S badness: 9.064",
            "5/847S badness: 11.539",
            "455/11S badness: 8.838",
            "badness score for 11/23S's zone: 1",
            "",
            "7/125S badness: 26.891",
            "1/11S badness: 3.811 * actual comma",
            "43S badness: 18.320",
            "155S badness: 7.299",
            "25/29S badness: 7.559",
            "125/49S badness: 7.028",
            "badness score for 1/11S's zone: 0",
            "",
            "221/5S badness: 11.876",
            "121/5S badness: 9.706",
            "245S badness: 5.158 * actual comma",
            "275/7S badness: 8.637",
            "25/209S badness: 8.857",
            "badness score for 245S's zone: 0",
            "",
            "23/5S badness: 5.888 * actual comma",
            "5/119S badness: 18.112",
            "badness score for 23/5S's zone: 0",
            "",
            "13/275S badness: 11.178",
            "7/13S badness: 4.630 * actual comma",
            "3773S badness: 11.276",
            "35/19S badness: 9.696",
            "badness score for 7/13S's zone: 0",
            "",
            "91/125S badness: 8.925",
            "19/55S badness: 12.088",
            "1/845S badness: 7.354",
            "143/7S badness: 7.817",
            "13/29S badness: 29.799",
            "11/17S badness: 6.398 * actual comma",
            "5/47S badness: 9.078",
            "55/23S badness: 50.661",
            "badness score for 11/17S's zone: 0",
            "",
            "1/625S badness: 6.013",
            "11/245S badness: 7.447",
            "7/37S badness: 10.919",
            "931S badness: 8.018",
            "145/7S badness: 8.957",
            "5/11S badness: 3.705 * actual comma",
            "badness score for 5/11S's zone: 0",
            "",
            "1/475S badness: 7.300",
            "323/5S badness: 14.386",
            "1/1001S badness: 7.911 * actual comma",
            "221S badness: 7.251",
            "1225S badness: 48.383",
            "1375/7S badness: 8.183",
            "badness score for 1/1001S's zone: 1",
            "",
            "17/35S badness: 7.287",
            "13/343S badness: 8.240",
            "1/833S badness: 9.941",
            "23S badness: 5.147 * actual comma",
            "35/13S badness: 17.162",
            "175/19S badness: 8.501",
            "badness score for 23S's zone: 0",
            "",
            "91/25S badness: 6.752 * actual comma",
            "1/12005S badness: 8.494",
            "19/11S badness: 6.867",
            "1/169S badness: 9.366",
            "5/247S badness: 8.365",
            "55/17S badness: 7.265",
            "badness score for 91/25S's zone: 0",
            "",
            "1/125S badness: 3.342 * actual comma",
            "41/25S badness: 9.806",
            "1/185S badness: 12.135",
            "11/49S badness: 27.597",
            "43/7S badness: 8.479",
            "1573S badness: 8.700",
            "91/19S badness: 50.876",
            "25/11S badness: 6.938",
            "125/343S badness: 8.545",
            "badness score for 1/125S's zone: 0",
            "",
            "121/35S badness: 7.829",
            "1/95S badness: 17.176",
            "133/13S badness: 8.981",
            "5/1001S badness: 9.246",
            "1105S badness: 8.326",
            "35S badness: 3.939 * actual comma",
            "badness score for 35S's zone: 0",
            "",
            "539/25S badness: 19.509",
            "17/7S badness: 5.297 * actual comma",
            "1/13S badness: 5.368",
            "29/17S badness: 9.564",
            "7/187S badness: 50.146",
            "7/41S badness: 8.213",
            "115S badness: 27.928",
            "badness score for 17/7S's zone: 0",
            "",
            "91/5S badness: 7.914 * actual comma",
            "49/85S badness: 8.101",
            "1/2401S badness: 8.259",
            "143/49S badness: 9.064",
            "95/11S badness: 7.927",
            "325/11S badness: 10.864",
            "badness score for 91/5S's zone: 0",
            "",
            "1/25S badness: 2.606 * actual comma",
            "41/5S badness: 7.702",
            "13/95S badness: 9.052",
            "1/37S badness: 6.899",
            "49/121S badness: 7.874",
            "badness score for 1/25S's zone: 0",
            "",
            "77/125S badness: 9.674",
            "121/7S badness: 6.822",
            "169/11S badness: 8.225",
            "437S badness: 9.320",
            "11/29S badness: 11.043",
            "259S badness: 14.433",
            "175S badness: 4.169 * actual comma",
            "badness score for 175S's zone: 0",
            "",
            "13/385S badness: 8.473",
            "1/935S badness: 9.256",
            "23/7S badness: 7.781",
            "1/1331S badness: 8.160",
            "1/253S badness: 13.448",
            "31/17S badness: 8.385",
            "85/7S badness: 9.930",
            "5/13S badness: 4.300 * actual comma",
            "badness score for 5/13S's zone: 0",
            "",
            "19/125S badness: 7.778",
            "7/115S badness: 8.250",
            "1/1183S badness: 8.401",
            "187S badness: 7.624",
            "49/17S badness: 7.315 * actual comma",
            "badness score for 49/17S's zone: 0",
            "",
            "11/343S badness: 7.786",
            "41S badness: 7.524",
            "13/19S badness: 6.633 * actual comma",
            "5/37S badness: 7.345",
            "665S badness: 8.113",
            "25/77S badness: 6.964",
            "badness score for 13/19S's zone: 0",
            "",
            "1/2275M badness: 29.385",
            "77/25M badness: 6.542 * actual comma",
            "1/665M badness: 7.688",
            "37/5M badness: 10.047",
            "19/13M badness: 7.572",
            "343/11M badness: 8.335",
            "605/7M badness: 19.313",
            "875M badness: 6.544",
            "badness score for 77/25M's zone: 0",
            "",
            "17/49M badness: 11.533",
            "13/77M badness: 18.312",
            "1/187M badness: 6.825",
            "1331M badness: 8.603",
            "1183M badness: 8.227",
            "77/19M badness: 14.393",
            "115/7M badness: 7.714",
            "25/13M badness: 5.821 * actual comma",
            "125/19M badness: 9.365",
            "badness score for 25/13M's zone: 0",
            "",
            "19/25M badness: 9.746",
            "1/2695M badness: 11.200",
            "13/5M badness: 4.616 * actual comma",
            "17/31M badness: 9.628",
            "7/23M badness: 6.216",
            "935M badness: 8.045",
            "385/13M badness: 11.183",
            "badness score for 13/5M's zone: 0",
            "",
            "1/175M badness: 5.075 * actual comma",
            "7/121M badness: 9.665",
            "7/221M badness: 13.995",
            "65/19M badness: 8.997",
            "25/37M badness: 19.237",
            "125/77M badness: 7.764",
            "badness score for 1/175M's zone: 0",
            "",
            "169/125M badness: 19.744",
            "77/5M badness: 5.990",
            "121/49M badness: 9.822",
            "1/133M badness: 6.554",
            "37M badness: 6.746 * actual comma",
            "95/13M badness: 7.981",
            "5/41M badness: 8.280",
            "badness score for 37M's zone: 1",
            "",
            "11/325M badness: 8.061 * actual comma",
            "11/95M badness: 10.651",
            "119/11M badness: 19.057",
            "49/143M badness: 8.293",
            "85/49M badness: 8.324",
            "5/187M badness: 8.589",
            "125/13M badness: 48.986",
            "badness score for 11/325M's zone: 0",
            "",
            "41/7M badness: 9.065",
            "13M badness: 3.345 * actual comma",
            "7/17M badness: 6.910",
            "35/23M badness: 10.810",
            "badness score for 13M's zone: 0",
            "",
            "1/35M badness: 2.828 * actual comma",
            "1/1105M badness: 11.188",
            "1/299M badness: 8.662",
            "23/17M badness: 18.733",
            "35/121M badness: 7.824",
            "badness score for 1/35M's zone: 0",
            "",
            "343/125M badness: 7.692",
            "1/1573M badness: 9.120",
            "7/43M badness: 8.853",
            "77M badness: 47.091",
            "5/133M badness: 49.130",
            "185M badness: 7.962",
            "25/41M badness: 8.276",
            "125M badness: 4.075 * actual comma",
            "badness score for 125M's zone: 0",
            "",
            "1/2125M badness: 8.382",
            "17/55M badness: 9.364",
            "247/5M badness: 8.003",
            "11/65M badness: 17.876",
            "11/19M badness: 6.749 * actual comma",
            "12005M badness: 9.365",
            "25/91M badness: 8.037",
            "badness score for 11/19M's zone: 0",
            "",
            "19/175M badness: 8.759",
            "1/3025M badness: 19.266",
            "833M badness: 7.939",
            "343/13M badness: 9.744",
            "65M badness: 10.598 * actual comma",
            "35/17M badness: 6.812",
            "badness score for 65M's zone: 1",
            "",
            "7/1375M badness: 8.559",
            "1/7M badness: 3.313 * actual comma",
            "1/221M badness: 7.274",
            "1001M badness: 8.536",
            "475M badness: 10.180",
            "badness score for 1/7M's zone: 0",
            "",
            "1/3185M badness: 8.936",
            "289/5M badness: 29.812",
            "7/145M badness: 8.718",
            "1/931M badness: 9.323",
            "7/31M badness: 28.691",
            "625M badness: 4.633 * actual comma",
            "badness score for 625M's zone: 0",
            "",
            "343/25M badness: 7.946",
            "11/5M badness: 4.881 * actual comma",
            "badness score for 11/5M's zone: 0",
            "",
            "1/425M badness: 48.883",
            "17/11M badness: 6.184 * actual comma",
            "247M badness: 7.403",
            "845M badness: 8.873",
            "55/19M badness: 7.937",
            "125/91M badness: 8.206",
            "badness score for 17/11M's zone: 0",
            "",
            "143/125M badness: 10.118",
            "19/35M badness: 7.064",
            "1/3773M badness: 8.642",
            "13/7M badness: 7.525",
            "5/23M badness: 6.151 * actual comma",
            "175/17M badness: 8.608",
            "badness score for 5/23M's zone: 0",
            "",
            "7/275M badness: 6.657 * actual comma",
            "119/13M badness: 9.925",
            "5/221M badness: 7.862",
            "badness score for 7/275M's zone: 0",
            "",
            "29/25M badness: 7.617",
            "1/155M badness: 8.962",
            "11M badness: 2.985 * actual comma",
            "7/29M badness: 7.519",
            "3125M badness: 9.176",
            "badness score for 11M's zone: 0",
            "",
            "11/455M badness: 8.531",
            "49/95M badness: 8.509",
            "29/19M badness: 11.607",
            "47M badness: 8.133",
            "19/23M badness: 9.285",
            "85/11M badness: 7.614 * actual comma",
            "35/143M badness: 8.712",
            "badness score for 85/11M's zone: 0",
            "",
            "19/7M badness: 16.841",
            "119M badness: 8.939",
            "65/7M badness: 6.233 * actual comma",
            "25/121M badness: 8.634",
            "25/23M badness: 7.077",
            "badness score for 65/7M's zone: 0",
            "",
            "31/25M badness: 9.649",
            "209/5M badness: 8.257",
            "7/55M badness: 11.231",
            "1/49M badness: 4.097 * actual comma",
            "391M badness: 11.329",
            "25/221M badness: 29.971",
            "badness score for 1/49M's zone: 0",
            "",
            "1/1045M badness: 9.025",
            "29/5M badness: 6.703",
            "1/31M badness: 6.187 * actual comma",
            "35/29M badness: 50.642",
            "badness score for 1/31M's zone: 0",
            "",
            "49/25M badness: 5.744",
            "169/35M badness: 50.217",
            "13/85M badness: 7.475",
            "1/377M badness: 19.721",
            "5/43M badness: 10.624",
            "55M badness: 5.255 * actual comma",
            "badness score for 55M's zone: 0",
            "",
            "17/125M badness: 7.744",
            "247/7M badness: 9.700",
            "11/91M badness: 7.301 * actual comma",
            "13/121M badness: 8.819",
            "847M badness: 8.996",
            "49/19M badness: 8.210",
            "115/11M badness: 9.015",
            "235M badness: 8.482",
            "badness score for 11/91M's zone: 0",
            "",
            "91/55M badness: 9.354",
            "595M badness: 7.641 * actual comma",
            "325/7M badness: 7.365",
            "25/17M badness: 7.384",
            "125/121M badness: 8.500",
            "125/23M badness: 19.484",
            "badness score for 595M's zone: 1",
            "",
            "7/3125M badness: 9.597",
            "1/275M badness: 8.586",
            "43/25M badness: 9.367",
            "31/5M badness: 7.027",
            "17/13M badness: 6.805",
            "1/29M badness: 7.087",
            "209M badness: 6.898",
            "5/49M badness: 4.207 * actual comma",
            "badness score for 5/49M's zone: 0",
            "",
            "",
            "JI NOTATION'S BADNESS SCORE WAS: 18",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
