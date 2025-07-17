/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdBroadcastStatisticsService {
    /**
     * Get the broadcast live statistics total RTMP watcher count, total HLS watcher count, total WebRTC watcher count
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsBroadcastStatistics({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}/broadcast-statistics',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
