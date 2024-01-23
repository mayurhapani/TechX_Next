import React from "react";
import styles from "../styles/Button.module.css";

export const HeaderButton = ({ BtnName }) => <button className={`${styles.Btn} d-none d-lg-block`}>{BtnName}</button>;

export const ButtonSm = ({ BtnName }) => <button className={`${styles.Btn} d-lg-none`}>{BtnName}</button>;

export const Button = ({ BtnName }) => <button className={`${styles.Btn} `}>{BtnName}</button>;
export const DarkBlueBtn = ({ BtnName }) => <button className={`${styles.DarkBlueBtn}`}>{BtnName}</button>;

export const BlueBtn = ({ BtnName }) => <button className={`${styles.BlueBtn}`}>{BtnName}</button>;

{
  /* <button className={`${styles.Btn} `} style={{ backgroundColor: color }}> */
}
