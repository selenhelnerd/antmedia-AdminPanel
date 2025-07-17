/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2LogFileOffsetSizeCharSizeService {
    /**
     * Gets log file. Char size of the log, offset or log type can be specified.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2LogFile({
        offsetSize,
        charSize,
        accept,
        logType,
    }: {
        offsetSize: string,
        charSize: string,
        accept?: string,
        /**
         * (Required) Log type. ERROR can be used to get only error logs
         */
        logType?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/log-file/{offsetSize}/{charSize}',
            path: {
                'offsetSize': offsetSize,
                'charSize': charSize,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'logType': logType,
            },
        });
    }
}
