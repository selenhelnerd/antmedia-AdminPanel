/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdİpCameraMoveService {
    /**
     * Move IP Camera. It support continuous, relative and absolute move. By default it's relative move.Movement parameters should be given according to movement type. Generally here are the values For Absolute move, value X and value Y is between -1.0f and 1.0f
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsİpCameraMove({
        id,
        accept,
        valueX,
        valueY,
        valueZ,
        movement,
        requestBody,
    }: {
        id: string,
        accept?: string,
        /**
         * Movement in X direction. If not specified, it's assumed to be zero. Valid ranges between -1.0f and 1.0f for all movements
         */
        valueX?: string,
        /**
         * Movement in Y direction. If not specified, it's assumed to be zero. Valid ranges between -1.0f and 1.0f for all movements
         */
        valueY?: string,
        /**
         * Movement in Zoom. If not specified, it's assumed to be zero. Valid ranges for relative and continous move is between -1.0f and 1.0f. For absolute move between 0.0f and 1.0f
         */
        valueZ?: string,
        /**
         * Movement type. It can be absolute, relative or continuous. If not specified, it's relative
         */
        movement?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/ip-camera/move',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'valueX': valueX,
                'valueY': valueY,
                'valueZ': valueZ,
                'movement': movement,
            },
            body: requestBody,
        });
    }
}
