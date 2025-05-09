'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const ReactApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

export const BarChart = ({ yaxis, xaxis }) => {
    const series = [
        { name: 'Sales Turnover By Month', data: yaxis },
    ]
    let options = {
        chart: { type: 'bar', height: 200 },
        plotOptions: {
            bar:
            {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        title: {
            text: 'Sales Turnover according months'
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: {
            categories: xaxis,
            axisBorder: { show: true },
            axisTicks: { show: true },
            labels: { style: { colors: '#6c757d', fontSize: '12px' } },
        },
        yaxis: {
            title: { text: 'Sales Turnover', style: { fontSize: '14px', fontWeight: 600 } },
            labels: { style: { colors: '#6c757d', fontSize: '12px' } },
        },
        fill: { opacity: 1, colors: ['rgb(254, 176, 25)'] },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return "Rs " + val
                }
            }
        },
        legend: { show: true }

    };
    return (
        <ReactApexCharts options={options} series={series} type='bar' height={200} />
    )
}

export const UserChart = ({ yaxis, xaxis }) => {
    const series = [
        { name: "User Registration", data: yaxis },
        // { name: "", data: [] },
    ]
    let options = {
        chart: { type: 'bar', height: 250 },
        plotOptions: {
            bar:
            {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        title: {
            text: 'Users resgistration count per month'
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: {
            categories: xaxis,
            axisBorder: { show: true },
            axisTicks: { show: true },
            labels: { style: { colors: '#6c757d', fontSize: '12px' } },
        },
        yaxis: {
            title: { text: 'Users Count', style: { fontSize: '14px', fontWeight: 600 } },
            labels: { style: { colors: '#6c757d', fontSize: '12px' } },
        },
        fill: { opacity: 1, colors: ['rgba(120, 200, 240, 0.86)'] },
        tooltip: {
            theme: 'light',
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        legend: { show: false }
    };
    return (
        <ReactApexCharts options={options} series={series} type='bar' height={200} />
    )
}

export const PieChart = ({ activeUser, inactiveUser }) => {
    console.log(activeUser, inactiveUser)
    if (activeUser === 0 && inactiveUser === 0) {
        return <div>Loading chart...</div>;
    }
    const series = [activeUser, inactiveUser];
    let options = {
        labels: ["Active Users", "Inactive Users"],
        chart: {
            width: 380,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        title: {
            text: 'Chart Show Active and Inactive Users'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
    return (
        <ReactApexCharts options={options} series={series} height={350} type='donut' />
    )
}

export const GroupedBarChart = ({ data }) => {
    const months = data?.length > 0 ? [...new Set(data.map(item => item.month))] : [];
    const categories = data?.length > 0 ? [...new Set(data.map(cat => cat.category))] : [];
    let series = categories?.length > 0 ? categories.map(ct => {
        return {
            name: ct,
            data: months.map(month => {
                const record = data.find(d => d.category === ct && d.month === month);
                return record ? record.totalRevenue : 0;
            })
        }
    }) : [];
    let options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Revenue according category'
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: { categories: months },
        yaxis: {
            title: {
                text: '(Ruppes)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
    };

    return (
        <ReactApexCharts options={options} series={series} type='bar' height={350} />
    )
}

export const HorizontalLessStockChart = ({ data }) => {
    const products = data?.length > 0 ? data.map(d => d.productVariant) : [];
    let series = [{ name: 'Less Stock Products', data: data?.length > 0 ? data.map(d => d.stock) : [] }]
    let options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Show products with less stock'
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: { categories: products },
        yaxis: {
            title: {
                text: 'Products'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        }
    };

    return (
        <ReactApexCharts options={options} series={series} type='bar' height={350} />
    )
}