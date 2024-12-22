import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import {
    ChartContainer,
    ChartLegend,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"
import axios from "axios"
import { useEffect, useState } from "react"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    ecg: {
        label: "ECG",
        color: "hsl(var(--chart-1))",
    },
    iecg: {
        label: "iECG",
        color: "hsl(var(--chart-2))",
    },
}

export function ECGchart() {
    const [chartData, setChartData] = useState([]);
    const [ecgParams, setEcgParams] = useState({
        heartRate: 0,
        oldpeak: 0,
        stSlope: '',
        restingEcg: ''
    });
    const [showECG, setShowECG] = useState(true);
    const [showiECG, setShowiECG] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchECGData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://127.0.0.1:5000/generate_ecg');
            
            if (response.data && response.data.data_points) {
                setChartData(response.data.data_points);
                setEcgParams({
                    heartRate: response.data.heart_rate,
                    oldpeak: response.data.Oldpeak,
                    stSlope: response.data.ST_Slope,
                    restingEcg: response.data.RestingECG
                });
                setError(null);
            } else {
                setError('Invalid data format received');
            }
        } catch (err) {
            setError(err.message);
            console.error('Error fetching ECG data:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Initial fetch
        fetchECGData();

        // Set up polling every 2 seconds
        const intervalId = setInterval(fetchECGData, 2000);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []);

    if (loading && !chartData.length) {
        return <Card><CardContent>Loading ECG data...</CardContent></Card>;
    }

    if (error) {
        return <Card><CardContent>Error: {error}</CardContent></Card>;
    }

    const mergedData = chartData.map((item) => ({
        time: item.time,
        ecg: showECG ? item.ecg : null,
        iecg: showiECG ? item.iecg : null,
    }));

    return (
        <Card>
            <CardHeader className="flex items-center gap-2 py-5 space-y-0 border-b sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>
                        Real-time ECG Monitor - Heart Rate: {ecgParams.heartRate} BPM
                        {loading && <span className="ml-2 text-sm text-muted-foreground">(Updating...)</span>}
                    </CardTitle>
                    <CardDescription>
                        ST-Slope: {ecgParams.stSlope} | Oldpeak: {ecgParams.oldpeak} | RestingECG: {ecgParams.restingEcg}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={mergedData}>
                        <defs>
                            <linearGradient id="fillECG" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-ecg)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-ecg)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="filliECG" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-iecg)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-iecg)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => value}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => value}
                                    indicator="dot"
                                />
                            }
                        />
                        {showECG && (
                            <Area
                                dataKey="ecg"
                                type="natural"
                                fill="url(#fillECG)"
                                stroke="var(--color-ecg)"
                                stackId="a"
                            />
                        )}
                        {showiECG && (
                            <Area
                                dataKey="iecg"
                                type="natural"
                                fill="url(#filliECG)"
                                stroke="var(--color-iecg)"
                                stackId="a"
                            />
                        )}
                        <ChartLegend
                            verticalAlign="top"
                            align="right"
                            iconType="circle"
                            iconSize={10}
                            payload={[
                                { value: chartConfig.ecg.label, type: "line", color: chartConfig.ecg.color },
                                { value: chartConfig.iecg.label, type: "line", color: chartConfig.iecg.color },
                            ]}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}