package com.example.zeta.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentData {
    private int customerId;
    private String status;
    private Double totalAmount;
    private Date paymentDate;
    private String modeOfPayment;
}
