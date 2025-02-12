import React from "react";
import { CgSpinner } from "react-icons/cg";
import { dateTimeFromNanos } from "../lib/datetime";
import { useInfo } from "../lib/hooks/useInfo";
import { formatNumber, formatPercent } from "../lib/utils";
import IdentifierLabelWithButtons from "./Buttons/IdentifierLabelWithButtons";
import Panel from "./Containers/Panel";
import { TimestampLabel } from "./Labels/TimestampLabel";
import { TokenLogo } from "./Labels/TokenLabel";

export function Stats() {
  const { data } = useInfo();

  return (
    <>
      <Panel className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl">Cubic Stats</h2>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Total Transaction Volume
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg inline-flex items-center">
              {formatNumber(Number(data.stats.salesTotal) / 1e12, 12)}{" "}
              <TokenLogo />
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Transaction Count
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatNumber(data.stats.transactionsCount)}
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Foreclosure Count
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatNumber(data.stats.foreclosureCount)}
            </span>
          )}
        </div>
      </Panel>

      <Panel className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl">Fees</h2>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Transaction Fee
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatPercent(Number(data.stats.transactionFee) / 1e8)}
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Fees Collected
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg inline-flex items-center">
              {formatNumber(Number(data.stats.feesCollected) / 1e12, 12)}{" "}
              <TokenLogo />
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Annual Tax Rate
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatPercent(Number(data.stats.annualTaxRate) / 1e8)}
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Tax Collected
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg inline-flex items-center">
              {formatNumber(Number(data.stats.taxCollected) / 1e12, 12)}{" "}
              <TokenLogo />
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Last Tax Collection
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : data.stats.lastTaxTimestamp > 0 ? (
            <span className="font-bold text-lg">
              <TimestampLabel
                dt={dateTimeFromNanos(data.stats.lastTaxTimestamp)}
              />
            </span>
          ) : (
            "—"
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Treasury
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg inline-flex items-center">
              {formatNumber(Number(data.stats.ownCubesBalance) / 1e12, 12)}{" "}
              <TokenLogo />
            </span>
          )}
        </div>
      </Panel>

      <Panel className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl">Balances</h2>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Total CUBE Supply
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg inline-flex items-center">
              {formatNumber(Number(data.stats.cubesSupply) / 1e12, 12)}{" "}
              <TokenLogo />
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            WTC Balance
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatNumber(Number(data.stats.wtcBalance) / 1e12, 12)} WTC
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            XTC Balance
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatNumber(Number(data.stats.xtcBalance) / 1e12, 12)} XTC
            </span>
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">
            Cycles Balance
          </label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <span className="font-bold text-lg">
              {formatNumber(Number(data.stats.cyclesBalance) / 1e12, 12)} TC
            </span>
          )}
        </div>
      </Panel>

      <Panel className="p-4 flex flex-col gap-4">
        <h2 className="text-2xl">Canisters</h2>

        <div>
          <label className="block text-gray-500 text-sm uppercase">WTC</label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <IdentifierLabelWithButtons
              type="Principal"
              id={data.canisters.wtc}
            />
          )}
        </div>

        <div>
          <label className="block text-gray-500 text-sm uppercase">XTC</label>
          {!data ? (
            <CgSpinner className="inline-block animate-spin" />
          ) : (
            <IdentifierLabelWithButtons
              type="Principal"
              id={data.canisters.xtc}
            />
          )}
        </div>
      </Panel>
    </>
  );
}
