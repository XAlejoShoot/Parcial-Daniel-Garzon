import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppContext } from '../../context/AppContext';
import { colors, globalStyles } from '../../styles/globalStyles';

const CalculatorScreen: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<string>('0');
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const { setLastCalculation } = useAppContext();

    useEffect(() => {
        if (previousValue && operation && currentValue !== '0') {
            setLastCalculation(`${previousValue} ${operation} ${currentValue}`);
        }
    }, [previousValue, operation, currentValue, setLastCalculation]);

    const handleNumberPress = (num: string) => {
        if (currentValue === '0') {
            setCurrentValue(num);
        } else {
            setCurrentValue(currentValue + num);
        }
    };

    const handleOperationPress = (op: string) => {
        setPreviousValue(currentValue);
        setOperation(op);
        setCurrentValue('0');
    };

    const handleClear = () => {
        setCurrentValue('0');
        setPreviousValue(null);
        setOperation(null);
    };

    const handleEqual = () => {
        if (previousValue && operation) {
            let result: number;
            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);

            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '×':
                    result = prev * current;
                    break;
                case '÷':
                    result = prev / current;
                    break;
                default:
                    return;
            }

            setCurrentValue(result.toString());
            setPreviousValue(null);
            setOperation(null);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.previousText}>
                    {previousValue} {operation}
                </Text>
                <Text style={styles.currentText} numberOfLines={1} adjustsFontSizeToFit>
                    {currentValue}
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                {[
                    ['C', '÷', '×', '←'],
                    ['7', '8', '9', '-'],
                    ['4', '5', '6', '+'],
                    ['1', '2', '3', '='],
                    ['0', '.', '', '']
                ].map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((item, colIndex) => (
                            item !== '' ? (
                                <TouchableOpacity
                                    key={colIndex}
                                    style={[
                                        styles.button,
                                        item === '=' ? styles.equalButton : {},
                                        item === 'C' ? styles.clearButton : {},
                                        ['+', '-', '×', '÷'].includes(item) ? styles.operationButton : {},
                                    ]}
                                    onPress={() => {
                                        if (item === 'C') handleClear();
                                        else if (item === '=') handleEqual();
                                        else if (['+', '-', '×', '÷'].includes(item)) handleOperationPress(item);
                                        else handleNumberPress(item);
                                    }}
                                >
                                    <Text style={[
                                        styles.buttonText,
                                        item === '=' ? styles.equalButtonText : {},
                                        item === 'C' ? styles.clearButtonText : {},
                                        ['+', '-', '×', '÷'].includes(item) ? styles.operationButtonText : {},
                                    ]}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <View key={colIndex} style={styles.button} />
                            )
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 16,
        justifyContent: 'flex-end',
    },
    display: {
        marginBottom: 24,
        padding: 20,
        borderRadius: 20,
        backgroundColor: colors.cardBg,
        minHeight: 120,
        justifyContent: 'space-between',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    previousText: {
        fontSize: 20,
        color: colors.darkGrey,
        textAlign: 'right',
    },
    currentText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'right',
    },
    buttonsContainer: {
        gap: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: colors.cardBg,
        flex: 1,
        height: 70,
        margin: 4,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.text,
    },
    equalButton: {
        backgroundColor: colors.accent,
    },
    equalButtonText: {
        color: colors.white,
    },
    clearButton: {
        backgroundColor: colors.error,
    },
    clearButtonText: {
        color: colors.white,
    },
    operationButton: {
        backgroundColor: colors.primary,
    },
    operationButtonText: {
        color: colors.white,
    },
});

export default CalculatorScreen;